import { z } from 'zod';

export const LessonFrontmatterSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    sidebar_label: z.string().optional(),
    sidebar_position: z.number().optional(),
    tags: z.array(z.string()).optional(),
    last_updated: z.string().optional(),
    author: z.string().optional(),
});

export type LessonFrontmatter = z.infer<typeof LessonFrontmatterSchema>;

export function validateFrontmatter(data: unknown): LessonFrontmatter {
    return LessonFrontmatterSchema.parse(data);
}
