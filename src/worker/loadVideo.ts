import {Worker, Job} from 'bullmq';

export const loadVideosWorker = new Worker(
  'prepare-videos',
  async (job: Job) => {
    console.log(`Job executed: ${job.id}`);
    console.log(`Region: ${job.data.region}`);
  }
);
