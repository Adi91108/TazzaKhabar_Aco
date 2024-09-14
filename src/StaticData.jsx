/// Supported Category Data
import { FaGlobe, FaBusinessTime, FaLaptopCode, FaFilm, FaFootballBall, FaFlask, FaStethoscope, FaNewspaper } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { PiNewspaperClippingFill } from "react-icons/pi";



export const categoryData = [
    { "label": "All", "value": "all", "icon": <PiNewspaperClippingFill /> },
    { "label": "General", "value": "general", "icon": <AiFillHome  /> },
    { "label": "World", "value": "world", "icon": <FaGlobe /> },
    { "label": "Nation", "value": "nation", "icon": <FaNewspaper /> },
    { "label": "Business", "value": "business", "icon": <FaBusinessTime /> },
    { "label": "Technology", "value": "technology", "icon": <FaLaptopCode /> },
    { "label": "Entertainment", "value": "entertainment", "icon": <FaFilm /> },
    { "label": "Sports", "value": "sports", "icon": <FaFootballBall /> },
    { "label": "Science", "value": "science", "icon": <FaFlask /> },
    { "label": "Health", "value": "health", "icon": <FaStethoscope /> }
];

/// Supported Language Data
export const supportedLanguageData = [
    {"label": "Arabic", "value": "ar"},
    {"label": "Chinese", "value": "zh"},
    {"label": "Dutch", "value": "nl"},
    {"label": "English", "value": "en"},
    {"label": "French", "value": "fr"},
    {"label": "German", "value": "de"},
    {"label": "Greek", "value": "el"},
    {"label": "Hebrew", "value": "he"},
    {"label": "Hindi", "value": "hi"},
    {"label": "Italian", "value": "it"},
    {"label": "Japanese", "value": "ja"},
    {"label": "Malayalam", "value": "ml"},
    {"label": "Marathi", "value": "mr"},
    {"label": "Norwegian", "value": "no"},
    {"label": "Portuguese", "value": "pt"},
    {"label": "Romanian", "value": "ro"},
    {"label": "Russian", "value": "ru"},
    {"label": "Spanish", "value": "es"},
    {"label": "Swedish", "value": "sv"},
    {"label": "Tamil", "value": "ta"},
    {"label": "Telugu", "value": "te"},
    {"label": "Ukrainian", "value": "uk"}
]

/// Supported Country Data
export const supportedCountryData = [
    {"label": "Australia", "value": "au"},
    {"label": "Brazil", "value": "br"},
    {"label": "Canada", "value": "ca"},
    {"label": "China", "value": "cn"},
    {"label": "Egypt", "value": "eg"},
    {"label": "France", "value": "fr"},
    {"label": "Germany", "value": "de"},
    {"label": "Greece", "value": "gr"},
    {"label": "Hong Kong", "value": "hk"},
    {"label": "India", "value": "in"},
    {"label": "Ireland", "value": "ie"},
    {"label": "Israel", "value": "il"},
    {"label": "Italy", "value": "it"},
    {"label": "Japan", "value": "jp"},
    {"label": "Netherlands", "value": "nl"},
    {"label": "Norway", "value": "no"},
    {"label": "Pakistan", "value": "pk"},
    {"label": "Peru", "value": "pe"},
    {"label": "Philippines", "value": "ph"},
    {"label": "Portugal", "value": "pt"},
    {"label": "Romania", "value": "ro"},
    {"label": "Russian Federation", "value": "ru"},
    {"label": "Singapore", "value": "sg"},
    {"label": "Spain", "value": "es"},
    {"label": "Sweden", "value": "se"},
    {"label": "Switzerland", "value": "ch"},
    {"label": "Taiwan", "value": "tw"},
    {"label": "Ukraine", "value": "ua"},
    {"label": "United Kingdom", "value": "gb"},
    {"label": "United States", "value": "us"}
]
