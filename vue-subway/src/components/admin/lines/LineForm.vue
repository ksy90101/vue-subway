<template>
  <div
    class="modal opacity-5 fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content text-left px-8 py-4">
        <div class="flex justify-center items-center pb-3 pt-3">
          <p class="text-2xl font-bold ">노선 정보</p>
        </div>
        <form id="subway-line-create-form" class="mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="subway-line-name"
            >
              노선 이름
            </label>
            <input
              id="subway-line-name"
              name="name"
              type="text"
              placeholder="노선 이름을 입력해주세요"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="flex mb-4">
            <div class="w-1/3 pr-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="subway-start-time"
              >
                첫차 시간
              </label>
              <input
                id="subway-start-time"
                name="startTime"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="첫차 시간"
              />
            </div>
            <div class="w-1/3 pr-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="subway-end-time"
              >
                막차 시간
              </label>
              <input
                id="subway-end-time"
                name="endTime"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="막차 시간"
              />
            </div>

            <div class="w-1/3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="subway-interval-time"
              >
                간격
              </label>
              <input
                id="subway-interval-time"
                name="intervalTime"
                type="number"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="간격"
              />
            </div>
          </div>

          <div id="subway-line-color-select-container" class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="subway-line-color"
            >
              노선 색상
            </label>
            <input
              placeholder="색상을 선택해주세요"
              class="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="subway-line-color"
              type="text"
              disabled
            />
            <color-select
              v-for="(color, index) of colors"
              v-bind:key="color.color"
              v-bind:index="index"
              v-bind:color="color"
            ></color-select>
          </div>

          <div class="action-container flex justify-end pt-4">
            <button
              class="modal-close px-4 bg-transparent p-3 rounded text-gray-600 hover:bg-gray-100 hover:text-gray-700 mr-2 text-sm"
            >
              취소
            </button>
            <button
              type="submit"
              id="submit-button"
              class="px-4 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 rounded text-white text-sm"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from "../../../constract/defaultSubwayData";
import colorSelect from "./ColorSelect";
export default {
  data: function() {
    return {
      colors: colors,
    };
  },
  components: {
    "color-select": colorSelect,
  },
};
</script>

<style></style>
