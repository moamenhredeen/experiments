import {ParentComponent} from "solid-js";
import {A} from '@solidjs/router'

const Layout: ParentComponent = (props) => {
    return (
        <div class="flex flex-col gap-8 p-8 m-auto w-full max-w-[800px]">
            <nav class="flex items-center justify-between">
                <A class="underline" href="/">Back</A>
                <div class="flex gap-4 bg-zinc-50 p-1 rounded items-center">
                    <A class="p-2 rounded" activeClass="bg-white" href="/event-handling-techniques/immediate">Immediate</A>
                    <A class="p-2 rounded" activeClass="bg-white" href="/event-handling-techniques/debounce">Debounce</A>
                    <A class="p-2 rounded" activeClass="bg-white" href="/event-handling-techniques/throttle">Throttle</A>
                </div>
                <span></span>
            </nav>
            <main class="bg-zinc-50 p-8">
                {props.children}
            </main>
        </div>
    )
}

export default Layout
