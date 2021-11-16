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
    const blockProps = useBlockProps();

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
                    title="Directory Filters"
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

            <div { ...blockProps }>
                <Canvas
                    attributes={attributes}
                    setAttributes={setAttributes}
                    typekitID="uav0tuz"
                    fontFamily="proxima-nova"
                    logoColor="#A60F2D"
                    textColor="#5F6062"
                />

                <div style={{ marginTop: '3rem' }}>
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






















// const { __ } = wp.i18n;
// const { useBlockProps, InspectorControls } = wp.blockEditor;
// const { TextControl, SelectControl, PanelBody, PanelRow } = wp.components;

// import React, { useState, useEffect } from 'react';
// import './editor.scss';


// export default function Edit({ className, attributes, setAttributes }) {
//     const [profiles, setProfiles] = useState([]);
//     const attributeKeys = Object.keys(attributes);
//     const debouncedAttributes = useDebounce(attributes, 1000);

//     useEffect(() => {
//         async function loadProfiles(){
//             // build url params based on attributes
//             const params = attributeKeys.reduce(function(acc, curr, idx){
//                 if(attributes[curr]){
//                     acc.push(curr.replace('_', '-') + '=' + attributes[curr]);
//                 }

//                 return acc;
//             }, []).join('&');

//             // make request
//             const response = await fetch('http://peopleapi.local/wp-json/peopleapi/v1/people?' + params);

//             if ( !response.ok ) { return; }

//             // update state
//             const profilesJson = await response.json();
//             setProfiles(JSON.parse(profilesJson));
//         }

//         loadProfiles();
//     }, [debouncedAttributes]); // only run on init and when attributes are changed

//     return (
//         <div {...useBlockProps()}>
//             <InspectorControls>
//                 <PanelBody
//                     title="Directory Filters"
//                     initialOpen={true}
//                 >
//                     <PanelRow>
//                         <TextControl
//                             label="Number of Results"
//                             help="Number of results per page. 'All' returns all profiles. Defaults to 10."
//                             value={ attributes.count }
//                             onChange={(newval) => setAttributes({ count: newval })}
//                         />
//                     </PanelRow>

//                     <PanelRow>
//                         <TextControl
//                             label="Page"
//                             help="Integer representing the page of results to return"
//                             value={ attributes.page }
//                             onChange={(newval) => setAttributes({ page: newval })}
//                         />
//                     </PanelRow>

//                     <PanelRow>
//                         <TextControl
//                             label="Network IDs"
//                             help="Comma delimited list of people network ids"
//                             value={ attributes.nid }
//                             onChange={(newval) => setAttributes({ nid: newval })}
//                         />
//                     </PanelRow>

//                     <PanelRow>
//                         <TextControl
//                             label="University Category"
//                             help="Comma delimited list of wsuwp_university_category taxonomy slugs"
//                             value={ attributes.university_category }
//                             onChange={(newval) => setAttributes({ university_category: newval })}
//                         />
//                     </PanelRow>

//                     <PanelRow>
//                         <TextControl
//                             label="University Location"
//                             help="Comma delimited list of wsuwp_university_location taxonomy slugs"
//                             value={ attributes.university_location }
//                             onChange={(newval) => setAttributes({ university_location: newval })}
//                         />
//                     </PanelRow>

//                     <PanelRow>
//                         <TextControl
//                             label="University Organization"
//                             help="Comma delimited list of wsuwp_university_org taxonomy slugs"
//                             value={ attributes.university_organization }
//                             onChange={(newval) => setAttributes({ university_organization: newval })}
//                         />
//                     </PanelRow>

//                     <PanelRow>
//                         <SelectControl
//                             label="Photo Size"
//                             help="Photo size (thumbnail, medium, medium_large, large, full). Defaults to medium."
//                             value={ attributes.size }
//                             onChange={(newval) => setAttributes({ size: newval })}
//                             options={ [
//                                 { label: 'Thumbnail', value: 'thumbnail' },
//                                 { label: 'Medium', value: 'medium' },
//                                 { label: 'Medium Large', value: 'medium_large' },
//                                 { label: 'Large', value: 'large' },
//                                 { label: 'Full', value: 'full' },
//                             ]}
//                         />
//                     </PanelRow>
//                 </PanelBody>
//             </InspectorControls>

//             <div className="profiles">
//                 {profiles.map((p, index) =>
//                     <div className="profile" key={index}>
//                         <div className="profile__img-container">
//                             <img className="profile__img" src={p.photo}/>
//                         </div>

//                         <h2 className="profile__name">{p.name}</h2>

//                         {p.title.map((t, index) =>
//                             <div key={index}>{t}</div>
//                         )}

//                         {p.university_organization.map((o, index) =>
//                             <div key={index}>{o.name}</div>
//                         )}
//                     </div>
//                 )}
//             </div>

//         </div >
//     );
// }


// // useDebounce Hook - https://usehooks.com/useDebounce/
// function useDebounce(value, delay) {
//     // State and setters for debounced value
//     const [debouncedValue, setDebouncedValue] = useState(value);
//     useEffect(
//       () => {
//         // Update debounced value after delay
//         const handler = setTimeout(() => {
//           setDebouncedValue(value);
//         }, delay);
//         // Cancel the timeout if value changes (also on delay change or unmount)
//         // This is how we prevent debounced value from updating if value is changed ...
//         // .. within the delay period. Timeout gets cleared and restarted.
//         return () => {
//           clearTimeout(handler);
//         };
//       },
//       [value, delay] // Only re-call effect if value or delay changes
//     );
//     return debouncedValue;
//   }
