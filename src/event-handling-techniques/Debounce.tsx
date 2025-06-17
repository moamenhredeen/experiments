import {Component, createSignal, JSX, Show} from "solid-js";

const Debounce: Component = (props) => {

    const [value, setValue] = createSignal<string>('')
    const [count, setCount] = createSignal<number>(0)
    const [delay, setDelay] = createSignal<number>(0)

    function debounce(cb: any) {
        let timeout = 0;
        return function debounced(event: any) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                timeout = 0
                cb(event)
            }, delay())
        }
    }

    function changeHandler(e){
        setValue(e.target.value)
        setCount(count() + 1)
    }

    const debounced = debounce(changeHandler)

    return (
        <>
            <div class="mb-4">
                <fieldset class="flex gap-2 items-center">
                    <label>Debounce Delay</label>
                    <input class="bg-white p-2" type="number" placeholder="milliseconds"
                           value={delay()}
                           onChange={(event) => {
                               setDelay(+event.target.value)
                           }}/>
                </fieldset>
            </div>
            <input class="bg-white p-4 w-full border-2 border-zinc-200"
                   name="search"
                   type="text"
                   placeholder="search"
                   onInput={debounced}/>
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

export default Debounce
