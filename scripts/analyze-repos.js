// Script to analyze GitHub repositories and extract tech stacks
// Run with: node scripts/analyze-repos.js

const repos = [
  'kushal511/FinSight_Copilot',
  'kushal511/SkinShade-AI',
  'kushal511/Uber_eats_Lab2',
  'kushal511/Code_ReviewerApplication',
  'kushal511/Rag_system',
  'kushal511/Book_Recommendation_System',
  'kushal511/Semantic_search_Engine',
  'premshah06/DATA236_LAB1',
  'bencejdanko/uber-simulation-system'
];

async function analyzeRepo(repoFullName) {
  const [owner, repo] = repoFullName.split('/');
  
  try {
    // Fetch repository data
    const repoResponse = await fetch(`https://api.github.com/repos/${repoFullName}`);
    const repoData = await repoResponse.json();
    
    // Fetch languages
    const languagesResponse = await fetch(`https://api.github.com/repos/${repoFullName}/languages`);
    const languages = await languagesResponse.json();
    
    // Fetch README to look for tech mentions
    let readme = '';
    try {
      const readmeResponse = await fetch(`https://api.github.com/repos/${repoFullName}/readme`);
      const readmeData = await readmeResponse.json();
      readme = Buffer.from(readmeData.content, 'base64').toString('utf-8');
    } catch (e) {
      console.log(`No README found for ${repoFullName}`);
    }
    
    return {
      name: repoData.name,
      description: repoData.description,
      languages: Object.keys(languages),
      primaryLanguage: repoData.language,
      topics: repoData.topics || [],
      readme: readme.substring(0, 500) // First 500 chars
    };
  } catch (error) {
    console.error(`Error analyzing ${repoFullName}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Analyzing repositories...\n');
  
  for (const repo of repos) {
    const data = await analyzeRepo(repo);
    if (data) {
      console.log(`\n${'='.repeat(60)}`);
      console.log(`Repository: ${repo}`);
      console.log(`${'='.repeat(60)}`);
      console.log(`Name: ${data.name}`);
      console.log(`Description: ${data.description || 'N/A'}`);
      console.log(`Primary Language: ${data.primaryLanguage || 'N/A'}`);
      console.log(`Languages: ${data.languages.join(', ')}`);
      console.log(`Topics: ${data.topics.join(', ') || 'N/A'}`);
      console.log(`\nREADME Preview:\n${data.readme || 'N/A'}`);
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

main().catch(console.error);
