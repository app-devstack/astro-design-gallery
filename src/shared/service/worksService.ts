import { mockWorks } from '@shared/mock/mockWorks';
import { mockCategories } from '@shared/mock/mockCategories';
import type { AppWorkType } from '@shared/types';

class WorksService {
  /**
   * 作品一覧取得
   */
  async getWorks(): Promise<AppWorkType[]> {
    return mockWorks;
  }
}

export const worksService = new WorksService();
