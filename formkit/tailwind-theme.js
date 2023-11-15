// https://formkit.com/guides/create-a-tailwind-theme#a-complete-tailwind-theme-recreating-genesis-css
const globalClass = {
  fieldset: 'max-w-md border border-gray-400 rounded px-2 pb-1',
  help: 'text-xs text-gray-500',
  inner:
    'formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
  input:
    'appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none',
  label: 'block mb-1 font-bold text-sm',
  legend: 'font-bold text-sm',
  loaderIcon: 'inline-flex items-center w-4 text-gray-600 animate-spin',
  message: 'text-red-500 mb-1 text-xs',
  messages: 'list-none p-0 mt-1 mb-0',
  outer: 'mb-4 formkit-disabled:opacity-50',
  prefixIcon:
    'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  suffixIcon:
    'w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  suffix: 'bg-gray-200 rounded-tr rounded-br p-2 h-full',
  prefix: 'bg-gray-200 rounded-tl rounded-bl p-2 h-full',
};
const familyBoxClass = {
  decorator:
    'block h-4 w-4 rounded ring-1 bg-white ring-gray-400 text-transparent peer-checked:bg-primary-500 peer-checked:ring-primary-500 peer-checked:text-primary-500 group-hover:ring-primary-500',
  decoratorIcon: 'flex w-full h-full text-white',
  help: 'mb-2 mt-1.5',
  input: 'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
  inner: '$remove:formkit-disabled:bg-gray-200 cursor-pointer',
  label: '$reset text-sm text-gray-700 select-none cursor-pointer',
  wrapper: 'flex items-center mb-1 gap-x-2 w-fit group',
};
const familyButtonClass = {
  input:
    '$reset primary formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
  wrapper: 'mb-1',
  prefixIcon: '$reset block w-4 -ml-2 mr-2 aspect-square',
  suffixIcon: '$reset block w-4 ml-2 aspect-square',
};
const familyDropdownClass = {
  dropdownWrapper:
    'my-2 w-full shadow-lg rounded [&::-webkit-scrollbar]:hidden',
  emptyMessageInner:
    'flex items-center justify-center text-sm p-2 text-center w-full text-gray-500 [&>span]:mr-3 [&>span]:ml-0',
  inner:
    'max-w-md relative flex ring-1 ring-gray-400 focus-within:ring-primary-500 focus-within:ring-2 rounded mb-1 formkit-disabled:focus-within:ring-gray-400 formkit-disabled:focus-within:ring-1 [&>span:first-child]:focus-within:text-primary-500',
  input: 'w-full px-3 py-2',
  listbox: 'bg-white shadow-lg rounded overflow-hidden',
  listboxButton: 'flex w-12 self-stretch justify-center mx-auto',
  listitem:
    'pl-7 relative hover:bg-gray-300 data-[is-active="true"]:bg-gray-300 aria-selected:bg-primary-600 aria-selected:text-white data-[is-active="true"]:aria-selected:bg-primary-600 data-[is-active="true"]:aria-selected:bg-primary-700',
  loaderIcon: 'ml-auto',
  loadMoreInner:
    'flex items-center justify-center text-sm p-2 text-center w-full text-primary-500 formkit-loading:text-gray-500 cursor-pointer [&>span]:mr-3 [&>span]:ml-0',
  option: 'p-2.5',
  optionLoading: 'pl-2.5 text-gray-400',
  placeholder: 'p-2.5 text-gray-400',
  selector:
    'flex w-full justify-between items-center min-h-[2.625em] [&u] cursor-default',
  selection: 'flex w-full',
  selectedIcon: 'block absolute top-1/2 left-2 w-3 -translate-y-1/2',
  selectIcon:
    'flex box-content w-4 px-2 self-stretch grow-0 shrink-0 [&>svg]:w-[1em] cursor-pointer',
};
const familyTextClass = {
  inner:
    'flex items-center max-w-md ring-1 ring-gray-400 focus-within:ring-primary-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-primary-500 rounded mb-1',
  input:
    'w-full px-3 py-2 border-none text-base text-gray-700 placeholder-gray-400',
  suffixIcon:
    '$reset block w-7 mx-1 aspect-square formkit-disabled:bg-gray-200 bg-transparent text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-0 focus:shadow-none cursor-pointer',
};
const familyDateClass = {
  inner:
    'flex items-center max-w-md ring-1 ring-gray-400 focus-within:ring-primary-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-primary-500 rounded mb-1',
  input: 'w-full px-3 py-2 border-none text-gray-700 placeholder-gray-400',
};

const colorClass = {
  inner:
    'flex max-w-[5.5em] w-full formkit-prefix-icon:max-w-[7.5em] formkit-suffix-icon:formkit-prefix-icon:max-w-[10em]',
  input:
    '$reset appearance-none w-full cursor-pointer border-none rounded p-0 m-0 bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none',
  suffixIcon: 'min-w-[2.5em] pr-0 pl-0 m-auto',
};
const fileClass = {
  fileItem: 'flex items-center text-gray-800 mb-1 last:mb-0',
  fileItemIcon: 'w-4 mr-2 shrink-0',
  fileList:
    'shrink grow peer px-3 py-2 formkit-multiple:data-[has-multiple="true"]:mb-6',
  fileName: 'break-all grow text-ellipsis',
  fileRemove:
    'relative z-[2] ml-auto text-[0px] hover:text-red-500 pl-2 peer-data-[has-multiple=true]:text-sm peer-data-[has-multiple=true]:text-primary-500 peer-data-[has-multiple=true]:ml-3 peer-data-[has-multiple=true]:mb-2 formkit-multiple:bottom-[0.15em] formkit-multiple:pl-0 formkit-multiple:ml-0 formkit-multiple:left-[1em] formkit-multiple:formkit-prefix-icon:left-[3.75em]',
  fileRemoveIcon: 'block text-base w-3 relative z-[2]',
  inner:
    'relative max-w-md cursor-pointer formkit-multiple:[&>button]:absolute',
  input:
    'cursor-pointer text-transparent absolute top-0 right-0 left-0 bottom-0 opacity-0 z-[2]',
  noFiles: 'flex w-full items-center px-3 py-2 text-gray-400',
  noFilesIcon: 'w-4 mr-2',
};
const radioClass = {
  decorator: 'rounded-full',
  decoratorIcon: 'w-5 p-[5px]',
};
const rangeClass = {
  inner: '$reset flex items-center max-w-md',
  input: '$reset w-full mb-1 h-2 p-0 rounded-full',
  prefixIcon:
    '$reset w-4 mr-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  suffixIcon:
    '$reset w-4 ml-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
};
const selectClass = {
  inner:
    'flex flex-row max-w-md items-center rounded mb-1 ring-1 ring-gray-400 focus-within:ring-primary-500 focus-within:ring-2 [&>span:first-child]:focus-within:text-primary-500 cursor-pointer',
  input:
    'w-full pl-3 pr-8 py-2 border-none text-base formkit-multiple:p-0 cursor-pointer',
  // ! "formkit-multiple:" works fine but the "data-placeholder" isn't set correctly.
  // ? We handle it through CSS in the app.vue file for now.
  // 'w-full pl-3 pr-8 py-2 border-none text-base text-gray-700 placeholder-gray-400 formkit-multiple:p-0 formkit-multiple:data-[placeholder="true"]:text-gray-700 data-[placeholder="true"]:text-gray-400 formkit-multiple:data-[placeholder="true"]:text-inherit cursor-pointer',
  selectIcon:
    'flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em] cursor-pointer',
  option: 'formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700',
};
const textareaClass = {
  inner:
    'flex max-w-md rounded mb-1 ring-1 ring-gray-400 focus-within:ring-primary-500 [&>label:first-child]:focus-within:text-primary-500',
  input:
    'block w-full h-32 px-3 py-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline',
};
const toggleClass = {
  altLabel: 'block w-full mb-1 font-bold text-sm',
  inner: '$reset inline-block mr-2',
  input: 'peer absolute opacity-0 pointer-events-none',
  innerLabel:
    'text-[10px] font-bold absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1',
  thumb:
    'cursor-pointer relative left-0 aspect-square rounded-full transition-all w-5 bg-gray-100',
  track:
    'cursor-pointer p-0.5 min-w-[3em] relative rounded-full transition-all bg-gray-400 peer-checked:bg-primary-500 peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0',
  valueLabel: 'font-bold text-sm',
  wrapper: 'flex flex-wrap items-center mb-1',
};
const autocompleteClass = {
  closeIcon: 'block grow-0 shrink-0 w-3 mr-3.5',
  inner: '[&>div>[data-value]]:absolute [&>div>[data-value]]:mb-0',
  option: 'grow text-ellipsis',
  selection:
    'static flex left-0 top-0 right-0 bottom-0 mt-0 mb-2 rounded bg-gray-100',
  listitem: '$remove:pl-7',
};
const repeaterClass = {
  content: 'grow p-3 flex flex-col align-center',
  controlLabel: 'absolute opacity-0 pointer-events-none',
  controls: 'flex flex-col items-center justify-center bg-gray-100 p-3',
  downControl:
    'hover:text-primary-500 disabled:hover:text-inherit disabled:opacity-25',
  fieldset: 'py-4 px-5',
  help: 'mb-2 mt-1.5',
  item: 'flex w-full mb-1 rounded border border-gray-200',
  moveDownIcon: 'block w-4 my-1',
  moveUpIcon: 'block w-4 my-1',
  removeControl:
    'hover:text-primary-500 disabled:hover:text-inherit disabled:opacity-25',
  removeIcon: 'block w-6 my-1',
  insertControl:
    'hover:text-primary-500 disabled:hover:text-inherit disabled:opacity-25',
  addIcon: 'block w-6 my-1',
  upControl:
    'hover:text-primary-500 disabled:hover:text-inherit disabled:opacity-25',
};
const taglistClass = {
  input: 'grow',
  removeSelection: 'w-2.5 mx-1 self-center text-black leading-none',
  tag: 'flex items-center my-1 p-1 bg-gray-200 text-xs rounded-full',
  tagWrapper:
    'mr-1 focus:outline-none focus:text-white [&>div]:focus:bg-primary-500 [&>div>button]:focus:text-white',
  tagLabel: 'pl-2 pr-1',
  tags: 'flex items-center flex-wrap w-full py-1.5 px-2 gap-2',
};
const digitClass = {
  inner: 'flex flex-row gap-2',
  digit: 'h-8 w-8 text-center rounded-md border border-gray-400',
};

export default {
  global: globalClass,
  // Family styles apply to all inputs that share a common family
  'family:box': familyBoxClass,
  'family:button': familyButtonClass,
  'family:dropdown': familyDropdownClass,
  'family:text': familyTextClass,
  'family:date': familyDateClass,
  // Specific styles apply only to a given input type
  color: colorClass,
  file: fileClass,
  radio: radioClass,
  range: rangeClass,
  select: selectClass,
  textarea: textareaClass,
  toggle: toggleClass,
  autocomplete: autocompleteClass,
  repeater: repeaterClass,
  taglist: taglistClass,
  // Specific styles apply only to a given custom input name
  digit: digitClass,
};
