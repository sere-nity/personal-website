"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase"; // Adjust path if needed
import ProjectComponent from "../components/ProjectComponent";
import { ProjectType } from "../types/project";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProjectType[];
        
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      
      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectComponent key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
