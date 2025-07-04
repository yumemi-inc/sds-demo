import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "./Search";
import { useState } from "react";

const meta: Meta<typeof Search> = {
  component: Search,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Search>;

export const StorySearch: Story = {
  name: "Search",
  args: {},
  render: (args) => {
    const [results, setResults] = useState<string[]>([]);
    function updateResults(term: string) {
      const newArray = term
        ? fruitsList().filter((a) => a.match(new RegExp(term, "i")))
        : [];
      setResults(newArray);
    }

    return (
      <Search
        {...args}
        aria-label="Search for stuff"
        onSearch={(term) => updateResults(term)}
        results={results}
      />
    );
  },
};

function fruitsList() {
  return [
    "Acai",
    "Aceola",
    "Alfalfa Sprouts",
    "Apple",
    "Apricot",
    "Apricots",
    "Artichoke",
    "Asian Pear",
    "Asparagus",
    "Atemoya",
    "Avocado",
    "Bamboo Shoots",
    "Banana",
    "Bean Sprouts",
    "Beans",
    "Beets",
    "Belgian Endive",
    "Bell Peppers",
    "Bitter Melon",
    "Blackberries",
    "Blackberry",
    "Blueberries",
    "Bok Choy",
    "Boniato",
    "Boysenberries",
    "Broccoflower",
    "Broccoli",
    "Brussels Sprouts",
    "Cabbage",
    "Cactus Pear",
    "Camu Camu berry",
    "Cantaloupe",
    "Carambola",
    "Carrots",
    "Casaba Melon",
    "Cauliflower",
    "Celery",
    "Chayote",
    "Cherimoya",
    "Cherries",
    "Coconut",
    "Coconuts",
    "Collard Greens",
    "Corn",
    "Cranberries",
    "Cranberry",
    "Cucumber",
    "Currents",
    "Dates",
    "Dried Plums",
    "Durian",
    "Eggplant",
    "Endive",
    "Escarole",
    "Feijoa",
    "Fennel",
    "Fig",
    "Figs",
    "Garlic",
    "Goji berries",
    "Gooseberries",
    "Gooseberry",
    "Grapefruit",
    "Grapes",
    "Green Beans",
    "Green Onions",
    "Greens",
    "Guava",
    "Hominy",
    "Honeydew Melon",
    "Horned Melon",
    "Iceberg Lettuce",
    "Jackfruit",
    "Jerusalem Artichoke",
    "Jicama",
    "Kale",
    "Kiwi",
    "Kiwifruit",
    "Kohlrabi",
    "Kumquat",
    "Leeks",
    "Lemon",
    "Lemons",
    "Lettuce",
    "Lima Beans",
    "Lime",
    "Limes",
    "Longan",
    "Loquat",
    "Lucuma",
    "Lychee",
    "Madarins",
    "Malanga",
    "Mandarin Oranges",
    "Mango",
    "Mangos",
    "Mangosteen",
    "Melon",
    "Mulberries",
    "Mulberry",
    "Mushrooms",
    "Napa",
    "Nectarine",
    "Nectarines",
    "Okra",
    "Onion",
    "Orange",
    "Oranges",
    "Papaya",
    "Papayas",
    "Parsnip",
    "Passion Fruit",
    "Peach",
    "Peaches",
    "Pear",
    "Pears",
    "Peas",
    "Peppers",
    "Persimmons",
    "Pineapple",
    "Plantains",
    "Plum",
    "Plums",
    "Pomegranate",
    "Pomelo",
    "Potatoes",
    "Prickly Pear",
    "Prunes",
    "Pummelo",
    "Pumpkin",
    "Quince",
    "Radicchio",
    "Radishes",
    "Raisins",
    "Raspberries",
    "Red Cabbage",
    "Rhubarb",
    "Romaine Lettuce",
    "Rutabaga",
    "Shallots",
    "Snow Peas",
    "Spinach",
    "Sprouts",
    "Squash",
    "Strawberries",
    "String Beans",
    "Sweet Potato",
    "Tangelo",
    "Tangerine/Clementine",
    "Tangerines",
    "Tomatillo",
    "Tomato",
    "Turnip",
    "Ugli Fruit",
    "Water Chestnuts",
    "Watercress",
    "Watermelon",
    "Waxed Beans",
    "Yams",
    "Yellow Squash",
    "Yuca/Cassava",
    "Zucchini Squash",
  ];
}
