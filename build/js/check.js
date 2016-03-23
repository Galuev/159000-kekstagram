var getMessage = function(a, b) {
    var a_type = typeof a;
    var b_type = typeof b;
    if (a_type === 'boolean'){
        if(a) {
            return ("Переданное GIF-изображение анимировано и содержит " + b + " кадров");
        } else {
            return ("Переданное GIF-изображение не анимировано");
        };
    }else if(a_type === 'number'){
        var atribute = b * 4;
        return ("Переданное SVG-изображение содержит " + a + " объектов и "  + atribute + " атрибутов");
    }else if (a_type === 'object' && b_type !== 'object') {
        var sum = 0;
        for(i = 0; i < a.length; i++) {
            sum += a[i];
        }
        return ("Количество красных точек во всех строчках изображения: " + sum);
    }else if(a_type === 'object' && b_type === 'object') {
        var square = 0;
        for(i = 0; i < a.length; i++){
            square += a[i] * b[i];
        }
        return("Общая площадь артефактов сжатия: " + square + " пикселей")
    };
};