function loadExercises(elementId, exercises) {
    const exerciseList = document.getElementById(elementId);
    exercises.forEach(exercise => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div>
          <span class="exercise-name">${exercise.name}</span>
          <span class="sets">${exercise.sets}</span>
        </div>
        <button onclick="window.open('${exercise.video}', '_blank')">Watch Video</button>
      `;
      exerciseList.appendChild(listItem);
    });
  }
  