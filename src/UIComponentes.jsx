import React, { useState } from 'react';

function UIComponentes() {
    const [logoSrc, setLogoSrc] = useState('');
    const [previewMode, setPreviewMode] = useState(false);
    const [platformColor, setPlatformColor] = useState(['#ffffff', '#ffffff', '#ffffff']);
    const [iconUrl, setIconUrl] = useState('');

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setLogoSrc(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handlePreview = () => {
        setPreviewMode(!previewMode);
    };

    const handleColorChange = (color, index) => {
        const updatedColors = [...platformColor];
        updatedColors[index] = color;
        setPlatformColor(updatedColors);
    };

    const handleIconChange = (event) => {
        setIconUrl(event.target.value);
    };

    const generatePreviewStyle = () => {
        const color1 = platformColor[0];
        const color2 = platformColor[1];
        const color3 = platformColor[2];

        const blendedColor = blendColors(color1, color2, color3);

        return {
            backgroundColor: blendedColor,
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
    };

    const blendColors = (color1, color2, color3) => {
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);

        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);

        const r3 = parseInt(color3.slice(1, 3), 16);
        const g3 = parseInt(color3.slice(3, 5), 16);
        const b3 = parseInt(color3.slice(5, 7), 16);

        const blendedR = Math.round((r1 * 0.6) + (r2 * 0.3) + (r3 * 0.1));
        const blendedG = Math.round((g1 * 0.6) + (g2 * 0.3) + (g3 * 0.1));
        const blendedB = Math.round((b1 * 0.6) + (b2 * 0.3) + (b3 * 0.1));

        return `rgb(${blendedR}, ${blendedG}, ${blendedB})`;
    };

    const saveColors = () => {
        console.log('Colors saved:', platformColor);
    };

    return (
        <div>
            <section id="section1">
                <h2 id="platformLogoTitle">E-Commerce Platform Logo and Name Changes</h2>
                <div>
                    {logoSrc ? (
                        <div>
                            {previewMode ? (
                                <div>
                                    <img src={logoSrc} alt="E-commerce Platform Logo" style={{ width: '100%', height: 'auto' }} />
                                    <button onClick={handlePreview} id="editButton">Edit</button>
                                </div>
                            ) : (
                                <div>
                                    <img src={logoSrc} alt="E-commerce Platform Logo" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                                    <button onClick={handlePreview} id="previewButton">Preview</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p>Upload logo from cloud source or computer</p>
                            <button onClick={() => document.getElementById('logoInput').click()} id="uploadLogoButton">Upload Logo from Computer</button>
                            <input id="logoInput" type="file" accept="image/*" onChange={handleLogoUpload} style={{ display: 'none' }} />

                            <button id="uploadLogoCloudButton">Upload Logo via Cloud Source</button>
                        </div>
                    )}
                    <h3 id="platformNameTitle">E-commerce Platform Name</h3>
                    <input id="platformNameInput" type="text" placeholder="Enter platform name" />

                    <button id="createButton">Create</button>
                    <button id="editButton">Edit</button>
                    <button id="viewButton">View</button>
                    <button id="deleteButton">Delete</button>
                </div>
            </section>
            <section id="section2">
                <h2 id="platformColorTitle">Change E-Commerce Platform Color Designs</h2>
                <div>
                    <h3 id="platformColorsTitle">Platform Colors</h3>
                    {platformColor.map((color, index) => (
                        <div key={index}>
                            <input id={`colorInput-${index}`} type="color" value={color} onChange={(e) => handleColorChange(e.target.value, index)} />
                            <span>{index === 0 ? '60%' : index === 1 ? '30%' : '10%'}</span>
                        </div>
                    ))}
                    <button onClick={saveColors} id="saveColorsButton">Save Colors</button>
                </div>
                {previewMode && (
                    <div id="section2Preview">
                        <h3>Preview</h3>
                        <div style={generatePreviewStyle()}>
                            <p>Example webpage view for section 2</p>
                        </div>
                    </div>
                )}
            </section>
            <section id="section3">
                <h2 id="changeIconsTitle">Change Icons Design and Colors</h2>
                <div>
                    <h3 id="componentTypeTitle">Component Type</h3>
                    <select id="componentTypeSelect">
                        <option value="button">Button</option>
                        <option value="input">Input</option>
                        <option value="dropdown">Dropdown</option>
                    </select>
                    <h3 id="iconDesignTitle">Icon Design</h3>
                    <select id="iconDesignSelect">
                        <option value="design1">Design 1</option>
                        <option value="design2">Design 2</option>
                        <option value="design3">Design 3</option>
                    </select>
                    <h3 id="pagesTitle">Pages</h3>
                    <select id="pagesSelect" multiple>
                        <option value="home">Home</option>
                        <option value="product">Product</option>
                        <option value="event">Event</option>
                        <option value="contact">Contact</option>
                        <option value="user">User Profile</option>
                        <option value="admindashboard">Admin Dashboard</option>
                    </select>
                </div>
                {previewMode && (
                    <div id="section3Preview">
                        <h3>Preview</h3>
                        <div style={generatePreviewStyle()}>
                            <p>Example webpage view for section 3</p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default UIComponentes;
