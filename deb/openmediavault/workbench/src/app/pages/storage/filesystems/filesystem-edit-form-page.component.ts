/**
 * This file is part of OpenMediaVault.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @copyright Copyright (c) 2009-2021 Volker Theile
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
import { Component } from '@angular/core';
import { marker as gettext } from '@biesbjerg/ngx-translate-extract-marker';

import { FormPageConfig } from '~/app/core/components/intuition/models/form-page-config.type';

@Component({
  template: '<omv-intuition-form-page [config]="this.config"></omv-intuition-form-page>'
})
export class FilesystemEditFormPageComponent {
  public config: FormPageConfig = {
    request: {
      service: 'FsTab',
      get: {
        method: 'getByFsName',
        params: {
          fsname: '{{ _routeParams.fsname }}'
        }
      },
      post: {
        method: 'set'
      }
    },
    fields: [
      {
        type: 'confObjUuid'
      },
      {
        type: 'textInput',
        name: 'fsname',
        label: gettext('Name'),
        disabled: true
      },
      {
        type: 'hidden',
        name: 'dir'
      },
      {
        type: 'hidden',
        name: 'type'
      },
      {
        type: 'hidden',
        name: 'opts'
      },
      {
        type: 'hidden',
        name: 'freq'
      },
      {
        type: 'hidden',
        name: 'passno'
      },
      {
        type: 'hidden',
        name: 'hidden'
      },
      {
        type: 'select',
        name: 'usagewarnthreshold',
        label: gettext('Usage Warning Threshold'),
        value: 85,
        store: {
          data: [
            [0, gettext('Disabled')],
            [50, '50%'],
            [75, '75%'],
            [80, '80%'],
            [85, '85%'],
            [90, '90%'],
            [95, '95%']
          ]
        },
        validators: {
          required: true
        },
        hint: gettext(
          'Send a notification when the used file system capacity exceeds the specified threshold.'
        )
      },
      {
        type: 'textInput',
        name: 'comment',
        label: gettext('Comment'),
        value: ''
      }
    ],
    buttons: [
      {
        template: 'submit',
        execute: {
          type: 'url',
          url: '/storage/filesystems'
        }
      },
      {
        template: 'cancel',
        execute: {
          type: 'url',
          url: '/storage/filesystems'
        }
      }
    ]
  };
}
