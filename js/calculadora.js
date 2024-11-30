const mockApiData = [
    { name: 'Manzana', calories: 52 },
    { name: 'Banana', calories: 89 },
    { name: 'Arroz (100g)', calories: 130 },
    { name: 'Pollo (100g)', calories: 165 },
    { name: 'Pan (1 rebanada)', calories: 79 },
    { name: 'Aceitunas negras (100 gr)', calories: 349 },
    { name: 'Aceitunas verdes (100 gr)', calories: 132 },
    { name: 'Apio (100 gr)', calories: 20 },
    { name: 'Cebolla (100 gr)', calories: 47 },
    { name: 'Lechuga (100 gr)', calories: 18 },
    { name: 'Pera (100 gr)', calories: 61 },
    { name: 'Leche (100 gr)', calories: 68 },
    { name: 'Chorizo ', calories: 468 },
    { name: 'Azúcar', calories: 380 },
    { name: 'Salame', calories: 325 },
    { name: 'Tira de asado', calories: 401 },
    { name: 'atun en lata', calories: 280 },
    { name: 'Miel', calories: 300 },
    { name: 'Avena', calories: 250 },
    { name: 'fideos secos', calories: 115 },
    { name: 'Fideos frescos', calories: 130 },
    { name: 'Yogurt', calories: 79 },
    { name: 'Chocolate', calories: 560 },
    { name: 'Morcilla', calories: 395 },

  ];
  
  const searchFood = async (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = mockApiData.filter((food) =>
          food.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(results);
      }, 500); 
    });
  };
  
  
  const displaySearchResults = (foods) => {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = ''; 
  
    if (foods.length === 0) {
      resultsDiv.innerHTML = '<p>No se encontraron alimentos</p>';
      return;
    }
  
    foods.forEach((food) => {
      const foodItem = document.createElement('div');
      foodItem.classList.add('food-item');
      foodItem.innerHTML = `
        <span>${food.name} - ${food.calories} kcal</span>
        <button class="add-btn" data-name="${food.name}" data-calories="${food.calories}">Agregar</button>
      `;
      resultsDiv.appendChild(foodItem);
    });
  
    
    document.querySelectorAll('.add-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const calories = parseInt(e.target.getAttribute('data-calories'));
        addFoodToList({ name, calories });
      });
    });
  };
  
  
  const addFoodToList = (food) => {
    const foodList = document.getElementById('food-list');
  
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${food.name} - ${food.calories} kcal
      <button class="remove-btn" data-calories="${food.calories}">Eliminar</button>
    `;
  
    foodList.appendChild(listItem);
 
    updateTotalCalories(food.calories);
  
    listItem.querySelector('.remove-btn').addEventListener('click', (e) => {
      removeFoodFromList(e.target, food.calories);
    });
  };
  
  const removeFoodFromList = (button, calories) => {
    const listItem = button.parentElement;
    listItem.remove(); 
  

    updateTotalCalories(-calories);
  };

  const updateTotalCalories = (calories) => {
    const totalCaloriesSpan = document.getElementById('total-calories');
    const currentTotal = parseInt(totalCaloriesSpan.innerText);
    totalCaloriesSpan.innerText = currentTotal + calories;
  };
  
  document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('food-input').value.trim();
    if (query) {
      const results = await searchFood(query);
      displaySearchResults(results);
    }
  });
