export interface QuizCategory {
  id: number;
  name: string;
  icon: string;
}

export const QUIZ_CATEGORIES: QuizCategory[] = [
    { id: 9 , name: 'General Knowledge', icon: 'book' },
    { id: 10, name: 'Entertainment: Books', icon: 'book' },
    { id: 11, name: 'Entertainment: Film', icon: 'film' },
    { id: 12, name: 'Entertainment: Music', icon: 'musical-notes' },
    { id: 13, name: 'Entertainment: Musicals & Theatres', icon: 'theater-comedy' },
    { id: 14, name: 'Entertainment: Television', icon: 'tv' },
    { id: 15, name: 'Entertainment: Video Games', icon: 'game-controller' },
    { id: 16, name: 'Entertainment: Board Games', icon: 'dice' },
    { id: 17, name: 'Science & Nature', icon: 'leaf' },
    { id: 18, name: 'Science: Computers', icon: 'laptop' },
    { id: 19, name: 'Science: Mathematics', icon: 'calculator' },
    { id: 20, name: 'Mythology', icon: 'planet' },
    { id: 21, name: 'Sports', icon: 'football' },
    { id: 22, name: 'Geography', icon: 'map' },
    { id: 23, name: 'History', icon: 'time' },
    { id: 24, name: 'Politics', icon: 'people' },
    { id: 25, name: 'Art', icon: 'color-palette' },
    { id: 26, name: 'Celebrities', icon: 'star' },
    { id: 27, name: 'Animals', icon: 'paw' },
    { id: 28, name: 'Vehicles', icon: 'car' },
    { id: 29, name: 'Entertainment: Comics', icon: 'book' },
    { id: 30, name: 'Science: Gadgets', icon: 'phone-portrait' },
    { id: 31, name: 'Entertainment: Japanese Anime & Manga', icon: 'book' },
    { id: 32, name: 'Entertainment: Cartoon & Animations', icon: 'tv' },
];