import {useQuery} from "@tanstack/react-query";
import * as axios from "axios";
import escapeHtml from "escape-html"
import {Text} from "slate";

export async function fetchPayload(BASE_URI, collection, limit, locale) {
    try{
        const res = await fetch(`${BASE_URI}/api/${collection}?limit=${limit}&locale=${locale}`)
        const data = await res.json()
        return data;
    } catch(e) {
        console.error(e)
    }
}


function decodeHtmlEntities(text) {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

export function serialize(node) {
    if (Text.isText(node)) {
        let string = escapeHtml(node.text);
        string = decodeHtmlEntities(string)
        if (node.bold) {
            string = `<h1>${string}</h1>`;
        }
        return string;
    }

    const children = node.children.map((n) => serialize(n)).join("");

    switch (node.type) {
        case "quote":
            return `<blockquote><p>${children}</p></blockquote>`;
        case "paragraph":
            return `<p>${children}</p>`;
        case "link":
            return `<a href="${escapeHtml(node.url)}">${children}</a>`;
        default:
            return children;
    }
}