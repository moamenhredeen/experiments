import {Component, createSignal, Show} from "solid-js";

const Immediate: Component = (props) => {

    const [value, setValue] = createSignal<string>('')
    const [count, setCount] = createSignal<number>(0)

    function changeHandler(e){
        setValue(e.target.value)
        setCount(count() + 1)
    }

    return (
        <>
            <input class="bg-white p-4 w-full border-2 border-zinc-200"
                   name="search"
                   type="text"
                   placeholder="search"
                   onInput={changeHandler}/>
            <div class="flex flex-col items-center justify-center mt-12">
                <span>Called: {count()}</span>
                <Show when={value().trim().length > 0}>
                    <span>{value()}</span>
                </Show>
                <Show when={value().trim().length === 0}>
                    <span class="text-zinc-400">Empty</span>
                </Show>
            </div>
        </>
    )
}

export default Immediate