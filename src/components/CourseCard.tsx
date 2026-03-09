import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';
import Link from '@docusaurus/Link';

interface CourseCardProps {
    title: string;
    description: string;
    slug: string;
    duration?: string;
    level?: 'Básico' | 'Intermedio' | 'Avanzado';
    students?: number;
}

export default function CourseCard({ title, description, slug, duration, level, students }: CourseCardProps) {
    return (
        <div className="flex flex-col h-full overflow-hidden border border-gray-200 rounded-xl bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-ethlima-blue dark:text-ethlima-lightBlue">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-slate-500 mb-6">
                    {duration && (
                        <span className="flex items-center gap-1">
                            <Clock size={14} /> {duration}
                        </span>
                    )}
                    {level && (
                        <span className="flex items-center gap-1">
                            <BookOpen size={14} /> {level}
                        </span>
                    )}
                    {students && (
                        <span className="flex items-center gap-1">
                            <Users size={14} /> {students} colaboradores
                        </span>
                    )}
                </div>

                <Link
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-ethlima-blue hover:bg-ethlima-blue/90 text-white font-medium transition-colors"
                    to={slug}
                >
                    Ver curso
                </Link>
            </div>
        </div>
    );
}
