import slugify from "slugify";

const variations = [
    {
        key: 'rgb',
        label: 'RGB',
        backgroundColor: 'transparent',
        logoColor: '#a60f2d',
        textColor: '#5f6062',
    },
    {
        key: 'cmyk',
        label: 'CMYK',
        backgroundColor: 'transparent',
        logoColor: '#af0737',
        textColor: '#3b3b3b',
    },
    {
        key: 'rev',
        label: 'Reverse / White',
        backgroundColor: '#4d4d4d',
        logoColor: '#fff',
        textColor: '#fff',
    },
];

export default function Save( { attributes } ) {
    const hwRatio = attributes.height / attributes.width;
    const width = 2000;
    const height = Math.round(width * hwRatio);
    const filename = slugify(attributes.textLine1 + ' ' + attributes.textLine2, {
        lower: true,
        trim: true,
        remove: /[*+~.()'"!:@]/g
    });

    return (
        <>
        <div className="wsu-logo-generator__logo-collection"
            data-logo-width={attributes.width}
            data-logo-height={attributes.height}
            data-logo-filename={filename}>
            <header className="wsu-logo-generator__logo-collection-header">
                <h2 className="wsu-logo-generator__logo-collection-title">{ attributes.textLine1 + ' ' + attributes.textLine2 } Logos</h2>
                <div className="wsu-logo-generator__controls">
                    <span className="wsu-logo-generator__control-output-label">Dimensions</span>

                    <input
                        className="wsu-logo-generator__control-output-width"
                        type="text"
                        inputmode="numeric"
                        placeholder="0"
                        value="2000"
                        pattern="[0-9]*" />

                    <span>
                        <span className="wsu-logo-generator__output-height-spacer">x</span>
                        <span className="wsu-logo-generator__output-height">{ height }</span>
                    </span>
                </div>
            </header>

            {variations.map( (v) => (
                <div className="wsu-logo-generator__logo"
                    key={ v.key }>
                    <h3 className="wsu-logo-generator__logo-label">Color | { v.label }</h3>
                    <div
                        className="wsu-logo-generator__logo-outer-container">
                        <div
                            className="wsu-logo-generator__logo-container"
                            style={ { backgroundColor: v.backgroundColor  } }>
                            <div
                                className="wsu-logo-generator__logo-canvas">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id={`logo-${attributes.blockId}-${v.key}`}
                                    viewBox={`0 0 ${attributes.width} ${attributes.height}`}>
                                    <g>
                                        <g>
                                            <path style={{ fill: v.logoColor }} d="M48.46 78.71s4-1.72 6.22-8.36a16.53 16.53 0 0 1 1.44 8.21c-1.78.4-7.66.15-7.66.15M70.05 40.71s2.45 13.35-6.23 13.81C55.44 55 51.5 42.36 51.5 42.36s2 24.61 13.77 23c13.22-1.82 4.78-24.64 4.78-24.64M6.27 75.53c9.79-2.23 17.29-13.66 19.49-18.24l1.4-2.91.84 3.11a34.63 34.63 0 0 1 1 8.13v1.53c3.38.13 5.79-.55 7.29-2.11 2.16-2.22 2.8-6.44 2-12.88-.39-3.08-1.53-8-2.54-12.31-.52-2.21-1-4.3-1.3-5.78-1.89-9.46.45-15.34 2.75-18.6A16.72 16.72 0 0 1 38.31 14 45.48 45.48 0 0 0 20 25.69l4.13 4.78 1.68-1.58a27.25 27.25 0 0 1 .45 11.41 47.81 47.81 0 0 0-4.73-6l1.12-1.88-3.71-4.32-.43-.48a40.78 40.78 0 0 0-6 11.41l3.24 3 1.89 1.71.63-1.82a14.32 14.32 0 0 1 .3 12.62A23.16 23.16 0 0 0 15.64 49l.9-3-4.82-4.36C6.7 57.33 0 62.4 0 62.4a104.47 104.47 0 0 0 11.29-2.66 32.9 32.9 0 0 1-5 15.79"/>
                                            <path style={{ fill: v.logoColor }} d="m79.47 19-11.58.49a12.69 12.69 0 0 1-.62 4.05c1.08 4.73.33 7.29.33 7.29-1.94-4.5-3.41-5.76-3.41-5.76-10.64-4.72-16.62 6-16 12.86.52 5.66 2.58 13.18 4.18 25 1.35 9.93-3.68 14.22-9.46 15.2l-.38.07h-.09a19.16 19.16 0 0 1-3 .14H39c-.45 0-.89-.08-1.33-.13-4.5-.62-14.57-2.45-25-2.7 6.12-3.58 10.91-9.76 13.58-14.15a33.59 33.59 0 0 1 .28 4.33c0 .81 0 1.67-.11 2.54l-.1 1.2 1.2.1c4.79.42 8.18-.5 10.4-2.78 2.71-2.83 3.55-7.54 2.63-14.85-.4-3.2-1.56-8.17-2.58-12.55-.51-2.19-1-4.27-1.28-5.71C35 25 37.07 19.73 39.1 16.85a12.36 12.36 0 0 1 6.18-4.69h.12L49.36 0h1.24l-2.66 11.66c.62-.11 1.24-.2 1.87-.3L53.23.61h1.23L52.22 11c3.53-.45 7.37-.81 11.62-1.12a5.11 5.11 0 0 1 2.09 2.18l11.14-3.41.42 1.2L66.83 14c.08.22.17.44.24.68l11.65-1.45.19 1.25-11.3 2.25c0 .22.07.43.11.64l11.76.38Zm-33.56 5.21A16.51 16.51 0 0 1 56 21.6c.94.07 1.74-.18.72-.72-2.79-1.47-9.29-1-11.59.6a7.34 7.34 0 0 0-3 7.09 13.51 13.51 0 0 1 3.8-4.36"/>
                                            <path style={{ fill: v.textColor }} d="M92.55 15.76h1.72v60.79h-1.72z" />
                                        </g>
                                        <g>
                                            <text x="112" y={attributes.textLine2 ? '28' : '35.74' } style={{
                                                fontFamily: 'proxima-nova',
                                                fontWeight: '600',
                                                fontSize: '10px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '.2em',
                                                fill: v.textColor }}>{ attributes.campus.name.toUpperCase() }</text>

                                            <text x="112" y={attributes.textLine2 ? '50' : '57.53' } style={{
                                                fontFamily: 'proxima-nova',
                                                fontWeight: '700',
                                                fontSize: '20px',
                                                fill: v.textColor }}>{ attributes.textLine1 }</text>

                                            { attributes.textLine2 &&
                                                <text x="112" y="70" style={{
                                                    fontFamily: 'proxima-nova',
                                                    fontWeight: '700',
                                                    fontSize: '20px',
                                                    fill: v.textColor }}>{ attributes.textLine2 }</text>
                                            }
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="wsu-logo-generator__download-btn-container">
                            <button
                                className="wsu-logo-generator__download-btn wsu-button wsu-button--size-small"
                                data-svg={`logo-${attributes.blockId}-${v.key}`}
                                data-variation={v.key}>
                                Download</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

