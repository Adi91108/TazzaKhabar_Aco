export const CustomStyle = () => ({
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
  
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      color: "#f0851a",
      border: "2px solid #F2F2F2",
      boxShadow: "none",
      borderRadius: "12px",
      ":active": {
        color: "#cc0000",
      },
      ":hover": {
        borderColor: "#f0851a",
      },
      cursor: "pointer",
      paddingLeft: "5px",
      "@media (max-width: 640px)": {
        // Mobile (sm)
        fontSize: 10,
        height: 20,
      },
      "@media (min-width: 641px) and (max-width: 768px)": {
        // Tablet (md)
        fontSize: 15,
        height: 62,
      },
      "@media (min-width: 769px)": {
        // Desktop (lg and above)
        fontSize: 16,
        height: 58,
      },
    }),
  
    menu: (base, provided) => ({
      ...base,
      background: "transparent", // Transparent background for menu
      color: "#cc0000",
      borderRadius: "8px",
      borderColor: "#f0851a",
      border: "1px solid #f2f2f2",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }),
  
    menuList: (provided, state) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f100",
        marginTop: "5px",
        marginBottom: "5px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(128, 128, 128, 0.4)",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#cc0000",
      },
    }),
  
    option: (base, { data, isDisabled, isFocused, isSelected }) => ({
      ...base,
      backgroundColor: "transparent", // Transparent background to inherit from parent
      color: isSelected ? "#cc0000" : "inherit", // Inherit default color, selected option has red color
      cursor: "pointer",
      ":hover": {
        backgroundColor: "transparent", // Keep background transparent
        color: "#ff0000", // Text becomes red on hover
      },
      ":active": {
        backgroundColor: "transparent", // Keep background transparent
        color: "#8a2be2", // Text becomes violet on active
      },
    }),
  });
  