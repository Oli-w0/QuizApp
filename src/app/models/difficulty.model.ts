export interface Difficulty {
  id: string;
  name: string;
}

export const DIFFICULTIES: Difficulty[] = [
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' },
];