import {useEffect} from "react";


export default function useStartup(callback) {
    // Do not remove the brackets around callback, otherwise it raises a TypeError.
    // See: https://stackoverflow.com/a/74265567
    useEffect(() => {callback()}, [callback])
}