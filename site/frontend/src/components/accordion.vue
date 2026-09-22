<script setup lang="ts">
import {computed} from "vue";
import {useExpandedStore} from "../utils/expansion";

const props = withDefaults(
  defineProps<{
    id: string;
    defaultExpanded?: boolean;
  }>(),
  {
    defaultExpanded: false,
  }
);

const {toggleExpanded, isExpanded, setExpanded} = useExpandedStore();

if (props.defaultExpanded) {
  setExpanded(props.id, true);
}

const expanded = computed(() => isExpanded(props.id));
</script>

<template>
  <tr
    @click="toggleExpanded(props.id)"
    :class="{toggle: true, toggled: expanded}"
  >
    <td class="toggle-arrow">
      {{ expanded ? "▼" : "▶" }}
    </td>
    <slot name="default" />
  </tr>
  <tr v-if="expanded">
    <slot name="expanded" />
  </tr>
</template>

<style lang="scss" scoped>
.toggle {
  cursor: pointer;

  .toggle-arrow {
    padding-right: 5px;
  }

  &:hover,
  &.toggled {
    background-color: #d6d3d35c;
  }
}
</style>
