import {Component, createSignal, Show} from "solid-js";

const Debounce: Component = (props) => {

    const [value, setValue] = createSignal<string>('')
    const [count, setCount] = createSignal<number>(0)
    const [interval, setInterval] = createSignal<number>(0)

    function throttle(cb: any) {
        let shouldWait = false
        return function debounced(event: any) {
            if (shouldWait) return
            cb(event)
            shouldWait = true
            setTimeout(() => {
                shouldWait = false
            }, interval())
        }
    }

    function changeHandler(e){
        setValue(e.target.value)
        setCount(count() + 1)
    }

    const throttled = throttle(changeHandler)

    return (
        <>
            <div class="mb-4">
                <fieldset class="flex gap-2 items-center">
                    <label>Throttle Interval</label>
                    <input class="bg-white p-2" type="number" placeholder="milliseconds"
                           value={interval()}
                           onChange={(event) => {
                               setInterval(+event.target.value)
                           }}/>
                </fieldset>
            </div>
            <input class="bg-white p-4 w-full border-2 border-zinc-200"
                   name="search"
                   type="text"
                   placeholder="search"
                   onInput={throttled}/>
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
