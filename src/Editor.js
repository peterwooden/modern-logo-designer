import { useCallback, useRef, useState } from 'react';
import { CompactPicker } from 'react-color';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { Download } from 'react-feather';
import ToggleButton from './ToggleButton';

const FONT_FAMILIES = [
    'Arial',
    'Helvetica',
    'Tahoma',
    'Trebuchet MS',
    'Raleway',
    'Nunito Sans',
    'Roboto',
    'Merriweather Sans',
    'Rubik',
    'Quicksand',
    'Cabin',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Source Sans Pro',
    'Roboto Condensed',
    'Poppins',
    'Ubuntu',
    'Oxygen',
    'Josefin Sans',
    'Yantramanav',
];

function Editor() {
    const [text, setText] = useState('Modern Co');
    const [color, setColor] = useState('#000');
    const [fontWeight, setFontWeight] = useState(700);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [fontSize, setFontSize] = useState(40);
    const [fontFamily, setFontFamily] = useState('Raleway');
    const [italics, setItalics] = useState(false);
    const [underline, setUnderline] = useState(false);
    const ref = useRef(null);
    const downloadCallback = useCallback(
        () =>
            html2canvas(ref.current, {
                backgroundColor: null,
            }).then((canvas) => {
                canvas.toBlob((blob) => saveAs(blob, `${text}.png`));
            }),
        [ref, text]
    );

    return (
        <div className="grid grid-cols-30-1fr-min mx-auto w-96 gap-2 h-min auto-rows-min">
            <div className="bg-white shadow rounded-xl col-span-3">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                        color,
                        lineHeight: 'unset',
                        fontWeight,
                        letterSpacing: `${letterSpacing}px`,
                        fontSize: `${fontSize}px`,
                        fontFamily,
                        fontStyle: italics ? 'italic' : 'normal',
                        textDecoration: underline ? 'underline' : 'none',
                    }}
                    className="w-full p-5 text-3xl text-center outline-none transition-all bg-transparent"
                    ref={ref}
                />
            </div>
            <div className="col-span-3 flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                    <ToggleButton
                        active={italics}
                        onClick={() => setItalics((italics) => !italics)}
                    >
                        I
                    </ToggleButton>
                    <ToggleButton
                        active={underline}
                        onClick={() => setUnderline((underline) => !underline)}
                    >
                        U
                    </ToggleButton>
                </div>
                <ToggleButton onClick={downloadCallback}>
                    <Download />
                </ToggleButton>
            </div>

            <label htmlFor="font-family" className="my-auto">
                Font Family
            </label>
            <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                style={{ fontFamily }}
                id="font-family"
                className="col-span-2 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none  border border-gray-200 rounded-md py-2 pl-2"
            >
                {FONT_FAMILIES.map((family) => (
                    <option
                        key={family}
                        value={family}
                        style={{ fontFamily: family }}
                    >
                        {family}
                    </option>
                ))}
            </select>

            <label htmlFor="font-size">Font Size</label>
            <input
                type="range"
                min="1"
                max="100"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="slider"
                id="font-size"
            />
            <span>{fontSize}px</span>

            <label htmlFor="font-weight">Font Weight</label>
            <input
                type="range"
                min="100"
                max="900"
                step="100"
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                id="font-weight"
            />
            <span>{fontWeight}</span>

            <label htmlFor="letter-spacing">Letter Spacing</label>
            <input
                type="range"
                min="-10"
                max="20"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(e.target.value)}
                id="letter-spacing"
            />
            <span>{letterSpacing}px</span>

            <div className="col-span-3 mx-auto">
                <CompactPicker
                    onChange={(color) => setColor(color.hex)}
                    color={color}
                />
            </div>
        </div>
    );
}

export default Editor;
