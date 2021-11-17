import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import Save from './save';

registerBlockType('wsuwp/logo-generator', {
    title: 'Logo Generator',
    icon: 'art',
    category: 'design',
    attributes: {
        blockId: {
            type: 'string',
        },
        campus: {
            type: 'object',
            default: {
                key: 'washington-state-university',
                name: 'Washington State University'
            }
        },
        textLine1: {
            type: 'string',
            default: '',
        },
        textLine2: {
            type: 'string',
            default: '',
        },
        width: {
            type: 'integer',
            default: 0
        },
        height: {
            type: 'integer',
            default: 0
        },
    },
    edit: Edit,
    save: Save
});
