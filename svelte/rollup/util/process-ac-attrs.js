import getPropName from './get-prop-name';
import separateMustacheTag from './separate-mustache';

export default function processAcAttrs(node, magicContent, prefix) {
    const props = {};
    node.attributes
        .forEach(item => {
            let name = getPropName(item.name, prefix);
            if (name && name !== 'state' && name !== 'id') {
                const {strings, expressions} = separateMustacheTag(item);
                if (expressions.length) {
                    throw new Error(
                        `[atomic-classes] does not support expressions in props [${item.name}] = ${expressions}`);
                }
                props[name] = {classes: strings.join(' ')};
                magicContent.overwrite(item.start, item.end, '');
            }
        });
    return props;
}