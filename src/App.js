import { useState } from 'react';
import Editor from './Editor';
import { Intro } from './Intro';

function App() {
    const [showIntro, setShowIntro] = useState(true);
    return (
        <div className="w-screen h-screen p-4 bg-gray-50 flex flex-col justify-between">
            <div>
                <header className="mb-6">
                    <h1 className="text-3xl font-light text-center">
                        Modern Logo Designer
                    </h1>
                </header>
                {showIntro ? (
                    <Intro nextCallback={() => setShowIntro(false)} />
                ) : (
                    <Editor />
                )}
            </div>

            <footer className="text-sm text-gray-500">
                Fork me on{' '}
                <a
                    href="https://github.com/peterwooden/modern-logo-designer"
                    className="font-semibold"
                >
                    Github
                </a>
            </footer>
        </div>
    );
}

export default App;
