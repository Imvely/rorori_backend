module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // 추가된 규칙 비활성화 및 경고 수준 설정
    '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수는 경고만
    '@typescript-eslint/no-inferrable-types': 'off', // 추론 가능한 타입 명시 제거
    '@typescript-eslint/no-empty-function': 'off', // 빈 함수 허용
    '@typescript-eslint/ban-types': 'warn', // 특정 타입 금지 규칙 경고로 낮춤
    '@typescript-eslint/no-non-null-assertion': 'off', // Non-null 단언 허용
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'crlf', // Prettier가 CRLF를 기본으로 사용하도록 설정
      },
    ],
    'no-console': 'warn', // console.log 사용 경고
    'no-debugger': 'warn', // debugger 사용 경고
  },
};
