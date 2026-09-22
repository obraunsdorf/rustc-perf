import {ref} from "vue";

export function useExpandedStore() {
  const expanded = ref(new Set());

  function isExpanded(key: String) {
    return expanded.value.has(key);
  }

  function toggleExpanded(key: String) {
    if (isExpanded(key)) {
      expanded.value.delete(key);
    } else {
      expanded.value.add(key);
    }
  }

  function setExpanded(key: String, value: boolean) {
    if (value) {
      expanded.value.add(key);
    } else {
      expanded.value.delete(key);
    }
  }

  return {toggleExpanded, isExpanded, setExpanded};
}
