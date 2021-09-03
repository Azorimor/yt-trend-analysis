import {Worker, Job} from 'bullmq';

export const worker = new Worker('prepare-videos', async (job: Job) => {
  console.log(`Job executed: ${job.id}`);
});
