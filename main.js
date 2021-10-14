function setup()
{
    canvas = createCanvas(900, 800)
    canvas.position(450, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 220);

    fill(150, 0, 0)
    stroke(255, 0, 0)
    circle(50, 50, 80);

    fill(0, 128, 0)
    stroke(0, 128, 0)
    rect(90, 40, 460, 20);
     
    fill(150, 0, 0)
    stroke(255, 0, 0)
    circle(50, 50, 80);

    fill(0, 128, 0)
    stroke(0, 128, 0)
    rect(90, 400, 460, 20);

    fill(150, 0, 0)
    stroke(255, 0, 0)
    circle(50, 410, 80);

    fill(0, 128, 0)
    stroke(0, 128, 0)
    rect(35, 90, 30, 280);

    fill(150, 0, 0)
    stroke(255, 0, 0)
    circle(550, 410, 80);

    fill(0, 128, 0)
    stroke(0, 128, 0)
    rect(535, 90, 30, 280);
    
    fill(150, 0, 0)
    stroke(255, 0, 0)
    circle(550, 60, 80);
}

function take_snapshot() {
    save('student_name.png')
}