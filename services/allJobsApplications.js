// services/jobApplications.js
export async function fetchAppliedJobs(userId) {
    console.log(userId);
    const response = await fetch(`/api/jobs/applied?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch applied jobs');
    }
    return response.json();
  }
