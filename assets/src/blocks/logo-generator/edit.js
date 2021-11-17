import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { PanelRow, PanelBody, TextControl, CustomSelectControl, TextareaControl } from '@wordpress/components';
import { dispatch } from '@wordpress/data';
import Canvas from './canvas'

import './editor.scss'

const campusOptions = [
	{
		key: 'washington-state-university',
		name: 'Washington State University',
	},
	{
		key: 'wsu-pullman',
		name: 'WSU Pullman',
	},
    {
        key: 'wsu-spokane',
        name: 'WSU Spokane',
    },
    {
        key: 'wsu-tri-cities',
        name: 'WSU Tri-Cities',
    },
    {
        key: 'wsu-vancouver',
        name: 'WSU Vancouver',
    },
	{
		key: 'wsu-everett',
		name: 'WSU Everett',
	},
	{
		key: 'wsu-global-campus',
		name: 'WSU Global Campus',
	},
];

export default function Edit({ className, clientId, attributes, setAttributes, ...props }) {
    const blockProps = useBlockProps( {
        className: 'wsu-logo-generator__content',
    } );

    // store clientId for a unique idenifier
    useEffect(() => {
        setAttributes({ blockId: clientId });
    }, []);

    useEffect(() => {
        // dynamically set the post title
        const postTitle = `${attributes.textLine1}${attributes.textLine2 ? ' ' + attributes.textLine2 : ''} | ${attributes.campus.name}`;
        dispatch( 'core/editor' ).editPost( { title: postTitle.trim() } );

        // lock saving if logo text is empty
        if(!attributes.textLine1){
            dispatch( 'core/editor' ).lockPostSaving( 'logo-lock' );
        }else{
            dispatch( 'core/editor' ).unlockPostSaving( 'logo-lock' );
        }
    }, [ attributes.textLine1, attributes.textLine2, attributes.campus ]);

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title="Logo Settings"
                    initialOpen={true}
                >
                    <PanelRow>
                        <CustomSelectControl
                            className="wsu-logo-generator__select-control"
                            label="Campus"
                            options={ campusOptions }
                            onChange={ ( selector ) => {
                                setAttributes({ campus: selector.selectedItem });
                             } }
                            value={ campusOptions.find( (option) => option.key === attributes.campus.key ) }
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="Text Line 1"
                            placeholder="School of Engineering"
                            value={ attributes.textLine1 }
                            onChange={(newval) => setAttributes({ textLine1: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="Text Line 2"
                            placeholder="and Computer Science"
                            value={ attributes.textLine2 }
                            onChange={(newval) => setAttributes({ textLine2: newval })}
                        />
                    </PanelRow>

                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <Canvas
                    attributes={attributes}
                    setAttributes={setAttributes}
                    typekitID="uav0tuz"
                    fontFamily="proxima-nova"
                    logoColor="#A60F2D"
                    textColor="#5F6062"
                />

                <div className="wsu-logo-generator__instructions">
                    <h2>Instructions</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna felis, dignissim sit amet turpis nec, ornare cursus nisi. Maecenas rhoncus consequat ultrices. Fusce nisi lacus, vehicula eu efficitur ut, blandit vel eros. Cras vel urna ex. Nam sit amet ullamcorper ante. Fusce quis dui eget mi finibus feugiat vel lacinia lorem. Proin elementum lorem sed malesuada tristique.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna felis, dignissim sit amet turpis nec, ornare cursus nisi. Maecenas rhoncus consequat ultrices. Fusce nisi lacus, vehicula eu efficitur ut, blandit vel eros. Cras vel urna ex. Nam sit amet ullamcorper ante.
                    </p>
                </div>
            </div>
        </>
    );
}
