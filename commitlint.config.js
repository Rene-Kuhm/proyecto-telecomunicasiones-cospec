/**
 * Commitlint Configuration - Enterprise Grade
 *
 * Enforza Conventional Commits + Why/What/Impact structure
 *
 * @see https://commitlint.js.org
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Type enum (conventional commits)
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Bug fix
        'docs', // Documentación
        'style', // Formato (Biome, no afecta lógica)
        'refactor', // Refactoring (no cambia funcionalidad)
        'perf', // Performance improvement
        'test', // Tests
        'build', // Build system (deps, webpack, etc)
        'ci', // CI/CD changes
        'chore', // Mantenimiento
        'revert', // Revert commit anterior
      ],
    ],

    // Subject rules
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 10],
    'subject-full-stop': [2, 'never', '.'],

    // Body rules
    'body-leading-blank': [2, 'always'], // Línea en blanco antes del body
    'body-max-line-length': [2, 'always', 100],
    'body-min-length': [1, 'always', 20], // Warning si body muy corto

    // Footer rules
    'footer-leading-blank': [2, 'always'],

    // Scope rules
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [1, 'never'], // Warning si no hay scope (no error)

    // Type case
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },

  // Custom rules para validar Why/What/Impact (opcional - nivel enterprise)
  plugins: [
    {
      rules: {
        'body-structure': (parsed) => {
          const { body } = parsed;

          // Si no hay body, solo warning (no bloqueante)
          if (!body) {
            return [
              false,
              'Considera agregar contexto en el body:\n' +
                'Por qué: [problema/motivación]\n' +
                'Qué: [solución]\n' +
                'Impacto: [efecto esperado]',
            ];
          }

          // Verificar si tiene estructura Why/What/Impact (recomendado, no obligatorio)
          const hasWhy = /por qué|why|motiv|problem|context/i.test(body);
          const hasWhat = /qué|what|solu|implement|change/i.test(body);
          const hasImpact = /impacto|impact|effect|benefit/i.test(body);

          if (!hasWhy && !hasWhat && !hasImpact) {
            return [
              false,
              'Tip: Agrega contexto estructurado en el body:\n' +
                'Por qué: [problema que resuelve]\n' +
                'Qué: [cambios realizados]\n' +
                'Impacto: [efecto en negocio/proyecto]',
            ];
          }

          return [true];
        },
      },
    },
  ],

  // Configurar nivel de advertencia para body-structure
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ',',
    },
  },
};
