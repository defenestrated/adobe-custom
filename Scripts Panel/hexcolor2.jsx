myDialog = app.dialogs.add ({name:"Set RGB in Hex",canCancel:true});

with (myDialog)
{
    with (dialogColumns.add())
    {
        with (dialogRows.add())
            staticTexts.add ({staticLabel:"RGB"});
        with (dialogRows.add())
            colorBox = textEditboxes.add({editContents:"000000"});
    }
}
if (myDialog.show())
{
    var myDocument = app.activeDocument;
    val = colorBox.editContents.toUpperCase();
    if (val.length === 6 && val.match(/^[0-9A-F]{6}$/))
    {
        redval = val.substr(0,2);
        grnval = val.substr(2,2);
        bluval = val.substr(4,2);

        paintit(redval, grnval, bluval);
    }
    else if (val.length === 3 && val.match(/^[0-9A-F]{3}$/))
    {
        redval = val.substr(0, 1) + val.substr(0, 1);
        grnval = val.substr(1, 1) + val.substr(1, 1);
        bluval = val.substr(2, 1) + val.substr(2, 1);

        paintit(redval, grnval, bluval);
    }

    else if (val.length === 1 && val.match(/^[0-9A-F]{1}$/))
    {
        redval = grnval = bluval = val + val;

        paintit(redval, grnval, bluval);
    }

    else if (val.length === 2 && val.match(/^[0-9A-F]{2}$/)) {
        redval = grnval = bluval = val;

        paintit(redval, grnval, bluval);
    }
    else
    {
        alert ("Invalid entry\n"+val);
    }

    function paintit(r, g, b) {
        red = parseInt ("0x"+r);
        grn = parseInt ("0x"+g);
        blu = parseInt ("0x"+b);

        var strokeorfill = app.strokeFillProxySettings.active.toString();
        // alert(typeof strokeorfill + ": " + strokeorfill);

        var fullname = redval + grnval + bluval;
        myColor = myDocument.colors.item(fullname);
        try {
            var cname = myColor.name;
        }
        catch(e) {
            myColor = myDocument.colors.add({name:fullname, space:ColorSpace.RGB, colorValue:[red,grn,blu]});
        }
        try {
            if( strokeorfill === "FILL" ) app.selection[0].fillColor = myColor;
            else if (strokeorfill === "STROKE") app.selection[0].strokeColor = myColor;
        }
        catch(e) {
            alert("fuck!\n\n" + e);
        }
    }

}
