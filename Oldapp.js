const heading = React.createElement("div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{id:"heading"},"hello from child")
            ]
        )
    ]
    );
    const getroot = ReactDOM.createRoot(document.getElementById("root"))
    getroot.render(heading);