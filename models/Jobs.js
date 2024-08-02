import mongoose from 'mongoose';

const JobsSchema = new mongoose.Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    description: { type: String, required: true },
    employmentType: { type: String, required: true },
    logoUrl: { type: String, required: true }, 
    location: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    duties: { type: [String], required: true },
    skills: { type: [String], required: true },
    industry: {type: String, required: true},
      latitude: { type: String,  },
      longitude: { type: String, }
    }, { timestamps: true });
    
    export default mongoose.models.Jobs || mongoose.model('Jobs', JobsSchema);
    
    
    // enum: ["construction", "Information Technology", "finance", "design", "Marketing and Advertising", "none"],
    // default: 'none'


