console.log('Flappy Bird');

const sprites = new Image();
sprites.src = 'sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


//[Plano de Fundo]
const planodeFundo ={
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            planodeFundo.spriteX, planodeFundo.spriteY,
            planodeFundo.largura, planodeFundo.altura,
            planodeFundo.x, planodeFundo.y,
            planodeFundo.largura, planodeFundo.altura,
        );

        contexto.drawImage(
            sprites,
            planodeFundo.spriteX, planodeFundo.spriteY,
            planodeFundo.largura, planodeFundo.altura,
            (planodeFundo.x + planodeFundo.largura), planodeFundo.y,
            planodeFundo.largura, planodeFundo.altura,
        );
    }
};

// [Chao]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        );
    }
};

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
}

function loop() {
    planodeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();
    
    requestAnimationFrame(loop);
}

loop();