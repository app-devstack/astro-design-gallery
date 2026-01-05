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

  /**
   * 作品ID一覧取得
   */
  async getWorkIds(): Promise<string[]> {
    return mockWorks.map((work) => work.id);
  }

  /**
   * 作品詳細取得
   */
  async getWorkById(id: string): Promise<AppWorkType | null> {
    return mockWorks.find((work) => work.id === id) || null;
  }
}

export const worksService = new WorksService();
