export const listItemTemplate = (data) =>
  `<div class="list-item border border-gray-200 py-2 px-4 text-gray-800" data-id="${data.id}">
    ${data.name}
    <button class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right">
       <span class="mdi mdi-delete"></span>
    </button>
  </div>`;

export const subwayLinesTemplate = (line) =>
  `<div class="subway-line-item border border-gray-200 py-2 px-4 text-gray-800" data-id="${line.id}">
      <span class="${line.bgColor} w-3 h-3 rounded-full inline-block mr-1"></span>
      <span class="line-name">${line.name}</span>
      <button class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right">
         <span class="mdi mdi-delete"></span>
      </button>
      <button class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right">
         <span class="mdi mdi-pencil"></span>
      </button>
    </div>`;

export const optionTemplate = (data) =>
  `<option value="${data.id}">${data.name}</option>`;

export const subwayLinesItemTemplate = (line) => {
  const stations = line.stations
    ? line.stations.map((station) => listItemTemplate(station)).join("")
    : null;
  return `<div  data-id="${
    line.id
  }" class="subway-line-item inline-block w-1/2 px-2">
            <div class="rounded-sm w-full slider-list">
              <div class="border ${
                line.bgColor ? line.bgColor : ""
              } lint-name px-4 py-1">${line.name}</div>
              <div class="overflow-y-auto height-90">
              ${stations}
              </div>
            </div>
          </div>`;
};

export const initNavigation = () => {
  document.querySelector("body").insertAdjacentHTML("afterBegin", navTemplate);
};

export const colorSelectOptionTemplate = (option, index) => {
  const hasNewLine = ++index % 7 === 0;
  return `<button data-color="${
    option.bgColor
  }" class="color-select-option button w-6 h-6 
            ${option.bgColor} ${option.hoverColor} font-bold p-1 rounded">
           </button> ${hasNewLine ? "<br/>" : ""}`;
};
