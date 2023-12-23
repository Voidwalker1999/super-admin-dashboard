import React, { useState } from 'react';

function Widgets() {
    const [apps, setApps] = useState([]);
    const [widgets, setWidgets] = useState([]);

    const addApp = () => {
        // Generate a new app object with a unique ID
        const newApp = {
            id: Date.now(), // Example: Use a timestamp as the ID
            name: "New App" // Example: Set a default name for the new app
        };

        // Add the new app to the apps array
        setApps([...apps, newApp]);
    };

    const removeApp = (appId) => {
        // Filter out the app with the specified ID
        const updatedApps = apps.filter(app => app.id !== appId);

        // Update the apps array
        setApps(updatedApps);
    };

    const addWidget = () => {
        // Generate a new widget object with a unique ID
        const newWidget = {
            id: Date.now(), // Example: Use a timestamp as the ID
            name: "New Widget" // Example: Set a default name for the new widget
        };

        // Add the new widget to the widgets array
        setWidgets([...widgets, newWidget]);
    };

    const removeWidget = (widgetId) => {
        // Filter out the widget with the specified ID
        const updatedWidgets = widgets.filter(widget => widget.id !== widgetId);

        // Update the widgets array
        setWidgets(updatedWidgets);
    };

    return (
        <div>
            <div>
                <button id="add-app-button" onClick={addApp}>Add App</button>
                <button id="remove-app-button" onClick={() => removeApp(apps[0]?.id)}>Remove App</button>
            </div>
            <div>
                <button id="add-widget-button" onClick={addWidget}>Add Widget</button>
                <button id="remove-widget-button" onClick={() => removeWidget(widgets[0]?.id)}>Remove Widget</button>
            </div>
        </div>
    );
}

export default Widgets;
