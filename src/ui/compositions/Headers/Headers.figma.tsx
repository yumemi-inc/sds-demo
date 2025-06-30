import { figma } from "@figma/code-connect";
import { Header, HeaderAuth } from "./Headers";

figma.connect(Header, "<FIGMA_SECTIONS_HEADER>");
figma.connect(HeaderAuth, "<FIGMA_SECTIONS_HEADER_AUTH>");
