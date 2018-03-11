/*!
 * ASS/SSA subtitle syntax highlight for Prism.js
 *
 * @author Jack Cherng <jfcherng@gmail.com>
 * @version 1.1.0
 * @license MIT
 */
Prism.languages.ass = {
    'comment': {
        pattern: /^([ \t]*);.*$/m,
        inside: {
            'space': / /
        },
        lookbehind: true
    },
    'section-name': {
        pattern: /^([ \t]*)\[[^\]]*\](?=\s*$)/im,
        inside: {
            'space': / /
        },
        alias: 'variable'
    },
    'style-dialogue-comment': {
        pattern: /^([ \t]*)(Style|Comment|Dialogue):.*$/im,
        lookbehind: true,
        inside: {
            'keyword': /^(Style|Comment|Dialogue)(?=:)/im,
            'time': {
                pattern: /\d+:\d+:\d+\.\d+/m,
                alias: 'string'
            },
            'ass-tag': {
                pattern: /\{@*\\[^}\r\n]+\}/,
                alias: 'comment'
            },
            'new-line': {
                pattern: /\\[nNhH]/,
                alias: 'constant'
            },
            'space': / /
        }
    },
    'property': {
        pattern: /^([ \t]*)[^:]+(?=:)/im,
        inside: {
            'space': / /
        }
    }
};
