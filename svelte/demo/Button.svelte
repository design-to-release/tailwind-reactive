<script lang=ts>
    import { onMount } from 'svelte';

    import { mouse, keyboard } from '@atomic-class/action';

    export let text;
    export let keycode;

    export let state = 'default';

    /** keyboard support start*/
    onMount(() => {
        document.addEventListener('keydown', keyboardHandler);
        document.addEventListener('keyup', keyboardHandler);
    });
    function keyboardHandler(event) {
        state = keyboard(event, state, keycode);
    }
    /** keyboard support end*/

    function mouseHandler(event) {
        state = mouse(event, state);
    }
</script>
<span
    on:mouseenter={mouseHandler}
    on:mouseleave={mouseHandler}
    on:mousedown={mouseHandler}
    on:mouseup={mouseHandler}
    ac-state={state}
    ac-class="px-4 py-2 rounded-lg text-white font-bold m-2 text-base"
    ac-default="bg-green-600"
    ac-hover="bg-green-500 cursor-pointer"
    ac-active="bg-yellow-500"
    ac-disabled="bg-gray-500 text-gray-100 cursor-not-allowed"
    >
    <span
        class="material-icons align-bottom"
        ac-id="icon"
        ac-state={state.indexOf('disabled') == -1 ? 'default' : 'block'}
        ac-default="%icon-done"
        ac-block="%icon-block"
    ></span>
    {text}
</span>

<style lang="scss">
    @import './icon.scss';
</style>