import 'nutrition-label';
import _ from 'underscore';

// Value by Name
function valByName (list, query) {
  return _.find(list, { name: query }).value;
}

let NutritionDirective = function(SearchService) {
  
  return {
    scope: { code: '=', name: '=' },
    link: function(scope, element, attrs) {

      // Wait till the binding runs
      scope.$watch('code', (newValue, oldValue, s) => {
        if (scope.code !== undefined && scope.name !== undefined) {
          runSearch(scope.code, scope.name);
        }
      });

      // Function to create the nutrient label
      function runSearch (code, name) {

        SearchService.getNutrients(code).then( (res) => {

          // Get the nutrients
          let nutrients = res.data.nutrients.report.food.nutrients;

          // Get each value of the commodities nutrition
          let c = {};
          c.calories      = valByName(nutrients, 'Energy');
          c.fat           = valByName(nutrients, 'Total lipid (fat)');
          c.saturated     = valByName(nutrients, 'Fatty acids, total saturated');
          c.mono          = valByName(nutrients, 'Fatty acids, total monounsaturated');
          c.poly          = valByName(nutrients, 'Fatty acids, total polyunsaturated');
          c.trans         = valByName(nutrients, 'Fatty acids, total trans');
          c.cholesterol   = valByName(nutrients, 'Cholesterol');
          c.sodium        = valByName(nutrients, 'Sodium, Na');
          c.carbs         = valByName(nutrients, 'Carbohydrate, by difference');
          c.fiber         = valByName(nutrients, 'Fiber, total dietary');
          c.sugars        = valByName(nutrients, 'Sugars, total');
          c.protein       = valByName(nutrients, 'Protein');

          $(element).nutritionLabel({
            valueServingSizeUnit: '100 Grams',

            valueCalories : c.calories,
            valueFatCalories : 430,
            valueTotalFat : c.fat,
            valueMonoFat : c.mono,
            valuePolyFat : c.poly,
            valueSatFat : c.saturated,
            valueTransFat : c.trans,
            valueCholesterol : c.cholesterol,
            valueSodium : c.sodium,
            valueTotalCarb : c.carbs,
            valueFibers : c.fiber,
            valueSugars : c.sugars,
            valueProteins : c.protein,

            showVitaminA : false,
            showVitaminC : false,
            showCalcium : false,
            showIron : false,
            showFatCalories : false,
            showIngredients : false
          });
        });

      }
      
    }
  };

};

NutritionDirective.$inject = ['SearchService'];
export default NutritionDirective;