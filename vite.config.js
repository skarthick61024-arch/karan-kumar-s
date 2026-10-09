import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caseStudyRedbull: resolve(__dirname, 'case-study-redbull.html'),
        caseStudyRufus: resolve(__dirname, 'case-study-rufus.html'),
        caseStudyHiggsfield: resolve(__dirname, 'case-study-higgsfield.html'),
        caseStudyTechBenchmark: resolve(__dirname, 'case-study-tech-benchmark.html'),
        caseStudiesVault: resolve(__dirname, 'case-studies-vault.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        aiCreation: resolve(__dirname, 'ai-creation.html'),
        aiCreationKineticSpeed: resolve(__dirname, 'ai-creation-kinetic-speed.html'),
        aiCreationDesertMirage: resolve(__dirname, 'ai-creation-desert-mirage.html'),
        aiCreationInpainting: resolve(__dirname, 'ai-creation-inpainting.html'),
        aiCreationNeuralPortraits: resolve(__dirname, 'ai-creation-neural-portraits.html'),
        ugcVideos: resolve(__dirname, 'ugc-videos.html'),
      },
    },
  },
});
