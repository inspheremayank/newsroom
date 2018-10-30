/**
 * @file
 * Content authoring tweaks.
 */

(function ($) {
  if ($('body.front').length) {
    // Confirm on "Save".
    Drupal.ajax.prototype.newsroomReplacedBeforeSerialize = Drupal.ajax.prototype.beforeSerialize;
    Drupal.ajax.prototype.beforeSerialize = function (element_settings, options) {
      if ($(this.element).hasClass('panels-ipe-save') && !confirm(Drupal.t('Are you sure you want to update the homepage?'))) {
        return false;
      }
      return Drupal.ajax.prototype.newsroomReplacedBeforeSerialize(element_settings, options);
    }

    $(function () {
      // Always confirm on "Cancel".
      Drupal.ajax.prototype.commands.newsroomReplacedInitIPE = Drupal.ajax.prototype.commands.initIPE;
      Drupal.ajax.prototype.commands.initIPE = function (ajax, data, status) {
        var ret = Drupal.ajax.prototype.commands.newsroomReplacedInitIPE(ajax, data, status);
        if (Drupal.PanelsIPE.editors[data.key]) {
          Drupal.PanelsIPE.editors[data.key].changed = true;
        }
        return ret;
      };

      Drupal.locale = Drupal.locale || {};
      Drupal.locale.strings = Drupal.locale.strings || {};
      Drupal.locale.strings[''] = Drupal.locale.strings[''] || {};
      $.extend(Drupal.locale.strings[''], {
        'This will discard all unsaved changes. Are you sure?': 'Are you sure you want to discard changes?'
      });
    });
  }

})(jQuery);


;
