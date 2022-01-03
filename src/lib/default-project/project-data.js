import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    sparrow: {
        defaultMessage: 'Sparrow',
        description: 'Name for the sparrow',
        id: 'gui.defaultProject.sparrow'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: 'backdrop1',
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100,
                layerOrder: 0,
                tempo: 60,
                videoTransparency: 50,
                videoState: 'on',
                textToSpeechLanguage: null
            },
            {
                isStage: false,
                name: translator(messages.sparrow),
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'c6b1479621329fac5f2f8321678cc8d9',
                        name: 'smile',
                        bitmapResolution: 1,
                        md5ext: 'c6b1479621329fac5f2f8321678cc8d9.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 37.25555555555556,
                        rotationCenterY: 46.0099173553719
                    },
                    {
                        assetId: 'ade067a9d36b483c33c3660fe4be5f39',
                        name: 'ww',
                        bitmapResolution: 1,
                        md5ext: 'ade067a9d36b483c33c3660fe4be5f39.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 37.25555111111109,
                        rotationCenterY: 46.00991971074373
                    },
                    {
                        assetId: 'bd3a66cf64c3b49faa05ca0533fefc7e',
                        name: 'unhappy',
                        bitmapResolution: 1,
                        md5ext: 'bd3a66cf64c3b49faa05ca0533fefc7e.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 37.255552222222235,
                        rotationCenterY: 46.00991942148735
                    },
                    {
                        assetId: '6ef589152edc575109df924e625cc434',
                        name: 'angry',
                        bitmapResolution: 1,
                        md5ext: '6ef589152edc575109df924e625cc434.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 37.25555666666665,
                        rotationCenterY: 46.009922066115564
                    }
                ],
                sounds: [
                    {
                        assetId: '18e5a88512296cd96417449496bd8711',
                        name: 'chirp',
                        dataFormat: 'wav',
                        rate: 22050,
                        sampleCount: 546609,
                        md5ext: '18e5a88512296cd96417449496bd8711.wav'
                    }
                ],
                volume: 100,
                layerOrder: 1,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        monitors: [],
        extensions: [],
        meta: {
            semver: '3.1.0',
            vm: '3.1.0',
            agent: ''
        }
    });
};


export default projectData;
